import React from "react";
import { Heading, Subheading } from "@/components/catalyst/heading";

interface GroupNodeProps {
  data: {
    label: string;
  };

}

const GroupNode: React.FC<GroupNodeProps> = ({ data }) => {
  return (
    <>
      <div className="absolute -top-12 left-0 right-0 text-start p-1.5 text-sm font-semibold">
        <Heading>{data.label}</Heading>
      </div>
    </>
  );
};

export default GroupNode;
