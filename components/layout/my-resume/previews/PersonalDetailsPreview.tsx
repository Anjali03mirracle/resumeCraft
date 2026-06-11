import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";
import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

function PersonalDetailsPreview() {
  const { formData } = useFormContext();

  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: formData?.themeColor || themeColors[0],
        }}
      >
        {formData?.firstName} {formData?.lastName}
      </h2>

      <h2 className="text-center text-sm font-medium mt-1">
        {formData?.jobTitle}
      </h2>

      <div
        className="flex justify-center items-center gap-2 mt-3 text-xs flex-wrap"
        style={{
          color: formData?.themeColor || themeColors[0],
        }}
      >
        {formData?.phone && (
          <>
            <Phone size={12} />
            <span>{formData.phone}</span>
          </>
        )}

        {formData?.email && (
          <>
            <span>|</span>
            <Mail size={12} />
            <span>{formData.email}</span>
          </>
        )}

        {formData?.linkedin && (
          <>
            <span>|</span>
            <Linkedin size={12} />
            <span>{formData.linkedin}</span>
          </>
        )}

        {formData?.github && (
          <>
            <span>|</span>
            <Github size={12} />
            <span>{formData.github}</span>
          </>
        )}
      </div>

      <hr
        className="border-[1.5px] my-3 mb-5"
        style={{
          borderColor: formData?.themeColor || themeColors[0],
        }}
      />
    </div>
  );
}

export default PersonalDetailsPreview;