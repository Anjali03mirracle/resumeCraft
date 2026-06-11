"use client";

import { useFormContext } from "@/lib/context/FormProvider";
import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Loader2 } from "lucide-react";
import { updateResume } from "@/lib/actions/resume.actions";
import { useToast } from "@/components/ui/use-toast";

const PersonalDetailsForm = ({ params }: { params: { id: string } }) => {
  const { formData, handleInputChange } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSave = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const updates = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      jobTitle: formData?.jobTitle,
      address: formData?.address,
      phone: formData?.phone,
      email: formData?.email,
      linkedin: formData?.linkedin,
github: formData?.github,
    
    };

    const result = await updateResume({
      resumeId: params.id,
      updates: updates,
    });

    if (result.success) {
      toast({
        title: "Information saved.",
        description: "Personal details updated successfully.",
        className: "bg-white",
      });
    } else {
      toast({
        title: "Uh Oh! Something went wrong.",
        description: result?.error,
        variant: "destructive",
        className: "bg-white",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary-700 border-t-4 bg-white">
      <h2 className="text-2xl font-bold">
        👋 Let's get to know you
      </h2>

      <p className="mt-2 text-slate-500">
        Answer a few questions to build your resume.
      </p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div className="space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              What is your first name?
            </label>

            <Input
              name="firstName"
              placeholder="e.g. Jiya"
              defaultValue={formData?.firstName}
              required
              onChange={handleInputChange}
              className="no-focus"
            />
          </div>
          <div className="space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              What is your last name?
            </label>

            <Input
              name="lastName"
              placeholder="e.g. Sharma"
              defaultValue={formData?.lastName}
              required
              onChange={handleInputChange}
              className="no-focus"
            />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              What role are you targeting?
            </label>

            <Input
              name="jobTitle"
              placeholder="Software Development Engineer"
              defaultValue={formData?.jobTitle}
              required
              onChange={handleInputChange}
              className="no-focus"
            />
          </div>

          <div className="space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              Share your LinkedIn profile
            </label>

            <Input
              name="linkedin"
              placeholder="https://linkedin.com/in/your-profile"
              className="no-focus"
              defaultValue={formData?.linkedin}
onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              Share your GitHub profile
            </label>

            <Input
              name="github"
              placeholder="https://github.com/your-username"
              className="no-focus"
              defaultValue={formData?.github}
onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              What is your phone number?
            </label>

            <Input
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              defaultValue={formData?.phone}
              required
              onChange={handleInputChange}
              className="no-focus"
            />
          </div>

          <div className="space-y-2">
            <label className="mt-2 text-slate-700 font-semibold">
              What is your email address?
            </label>

            <Input
              name="email"
              placeholder="yourname@gmail.com"
              defaultValue={formData?.email}
              required
              onChange={handleInputChange}
              className="no-focus"
            />
          </div>

        </div>
        <div className="mt-5 flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary-700 hover:bg-primary-800 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Saving
              </>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
