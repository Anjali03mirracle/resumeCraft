import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";
import React from "react";

const SkillsPreview = () => {
  const { formData } = useFormContext();

  if (!formData?.skills || formData.skills.length === 0) {
    return null;
  }

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: formData?.themeColor || themeColors[0],
        }}
      >
        Skill{formData?.skills.length > 1 ? "s" : ""}
      </h2>

      <hr
        style={{
          borderColor: formData?.themeColor || themeColors[0],
        }}
      />

      <div className="grid grid-cols-2 gap-y-2 my-5">
        {formData?.skills.map((skill: any, index: number) => (
          <div key={index} className="text-xs">
            • {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;