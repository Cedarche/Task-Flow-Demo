import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownHeading,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownLabel,
  } from "@/components/catalyst/dropdown";
  import { ChevronDownIcon } from "@heroicons/react/16/solid";
  import { statuses, StatusKey } from "@/lib/DEMODATA";
  
  function classNames(...classes: (string | false | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  export function TaskBoardDropdown() {
    return (
      <Dropdown>
        <DropdownButton outline className="cursor-pointer">
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu anchor="bottom end">
          <DropdownSection aria-label="Account">
            <DropdownItem href="#">Task Settings</DropdownItem>
            <DropdownItem href="#">Edit Team</DropdownItem>
            <DropdownItem href="#">Generate Report</DropdownItem>
          </DropdownSection>
          <DropdownDivider />
          <DropdownSection>
            <DropdownHeading>Project Tasks</DropdownHeading>
            <DropdownItem href="#">
              <ProgressIndicator status="Started" text="Started" />
            </DropdownItem>
            <DropdownItem href="#">
              <ProgressIndicator status="Completed" text="Completed" />
            </DropdownItem>
            <DropdownItem href="#">
              <ProgressIndicator status="Error" text="Issues" />
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    );
  }
  
  const ProgressIndicator = ({ status, text }: any) => {
    return (
      <div className="flex flex-row items-center">
        <div
          className={classNames(
            statuses[status as StatusKey],
            " rounded-full p-1 w-[14px] h-[14px] "
          )}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-current" />
        </div>
        <span className="ml-2">{text}</span>
      </div>
    );
  };
  