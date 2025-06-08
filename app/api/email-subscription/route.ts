import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    // Get the Slack webhook URL from environment variables
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('SLACK_WEBHOOK_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Webhook configuration missing' },
        { status: 500 }
      );
    }

    // Parse the form data from the request
    const formData = await request.json();
    const { email } = formData;

    // Format the message for Slack
    const slackMessage = {
      text: "📧 New Email Subscription",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📧 New Email Subscription"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            }
          ]
        }
      ]
    };

    // Add timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    slackMessage.blocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `Time Submitted: ${timestamp}`
        }
      ]
    } as any);

    // Send to Slack
    const slackResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      console.error('Failed to send to Slack:', slackResponse.status, slackResponse.statusText);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    // Send to Google Sheets
    if (GOOGLE_SCRIPT_URL) {
      const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'email_subscription'
        }),
      });

      if (!googleResponse.ok) {
        console.error('Google Sheets error:', await googleResponse.text());
        // Continue even if Google Sheets fails - we don't want to block the form submission
      }
    }

    // Return success response
    return NextResponse.json(
      { message: 'Email subscription submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing email subscription:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 