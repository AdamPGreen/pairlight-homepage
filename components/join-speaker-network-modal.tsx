"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { UrlInput } from "@/components/ui/url-input";
import { SocialInput } from "@/components/ui/social-input";

// Form validation schema
const speakerFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL"),
  expertise: z.string().min(1, "Please specify your area of expertise"),
  speakingExperience: z.string().min(1, "Please describe your speaking experience"),
  phoneNumber: z.string()
    .refine((val) => !val || isValidPhoneNumber(val), {
      message: "Please enter a valid phone number",
    })
    .optional(),
  website: z.string()
    .refine((val) => {
      if (!val) return true;
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    }, "Please enter a valid URL")
    .optional(),
  twitter: z.string()
    .refine((val) => {
      if (!val) return true;
      // Allow empty string
      if (!val.trim()) return true;
      // Allow @handle format
      if (val.startsWith('@')) return true;
      // Allow valid URL
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    }, "Please enter a valid Twitter handle or URL")
    .optional(),
  instagram: z.string()
    .refine((val) => {
      if (!val) return true;
      // Allow empty string
      if (!val.trim()) return true;
      // Allow @handle format
      if (val.startsWith('@')) return true;
      // Allow valid URL
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    }, "Please enter a valid Instagram handle or URL")
    .optional(),
  additionalInfo: z.string().optional(),
});

type SpeakerFormValues = z.infer<typeof speakerFormSchema>;

interface JoinSpeakerNetworkModalProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

export function JoinSpeakerNetworkModal({ children, triggerClassName }: JoinSpeakerNetworkModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<SpeakerFormValues>({
    resolver: zodResolver(speakerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      linkedin: "",
      expertise: "",
      speakingExperience: "",
      phoneNumber: "",
      website: "",
      twitter: "",
      instagram: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (values: SpeakerFormValues) => {
    setIsSubmitting(true);
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/speaker-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Speaker application submitted successfully:", result);
      
      setIsSubmitted(true);
      form.reset();
      
      // Close modal after showing success state
      setTimeout(() => {
        setOpen(false);
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting speaker application:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when modal closes
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 px-6"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-green-600 mb-2">
              Application Received!
            </DialogTitle>
            <DialogDescription className="text-base">
              Thank you for your interest in joining our speaker network. We'll review your application and get back to you within 48 hours.
            </DialogDescription>
          </motion.div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 pt-6">
              <DialogHeader className="pb-6">
                <DialogTitle className="text-2xl font-bold">Join Our Speaker Network</DialogTitle>
                <DialogDescription>
                  Tell us about yourself and your speaking experience
                </DialogDescription>
              </DialogHeader>
              
              <Form {...form}>
                <form id="speaker-application-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-4">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john.doe@example.com" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile *</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expertise"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area of Expertise *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., AI & Machine Learning, Leadership, Digital Marketing" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="speakingExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Speaking Experience *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your speaking experience, including past events, audience sizes, and formats"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <PhoneInput 
                              value={field.value || ''}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              error={!!form.formState.errors.phoneNumber}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="instagram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram (Optional)</FormLabel>
                          <FormControl>
                            <SocialInput 
                              platform="instagram"
                              value={field.value || ''}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              error={!!form.formState.errors.instagram}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website (Optional)</FormLabel>
                          <FormControl>
                            <UrlInput 
                              value={field.value || ''}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              error={!!form.formState.errors.website}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="twitter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter (Optional)</FormLabel>
                          <FormControl>
                            <SocialInput 
                              platform="twitter"
                              value={field.value || ''}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              error={!!form.formState.errors.twitter}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Anything else you'd like us to know about you or your speaking experience"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
            <div className="border-t bg-background px-6 py-4">
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="speaker-application-form"
                  disabled={isSubmitting}
                  className="bg-[#6B85FE] hover:bg-[#5A73EB] text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
} 