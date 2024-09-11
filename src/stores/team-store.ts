// src/stores/team-store.ts
import { createStore } from "zustand/vanilla";
import { teamList } from "@/lib/DEMODATA";

export type TeamMember = {
  name: string;
  userID: string;
  email: string;
  task: string;
  subTask: string;
  completedTasks?: string[];
  imageUrl: string;
  role: string;
  title: string;
};

export type TeamState = {
  teamMembers: TeamMember[];
};

export type TeamActions = {
  addTeamMember: (member: TeamMember) => void;
  removeTeamMember: (userID: string) => void;
  updateTeamMember: (
    userID: string,
    updatedMember: Partial<TeamMember>
  ) => void;
};

export type TeamStore = TeamState & TeamActions;

export const defaultTeamList: TeamState = {
  teamMembers: teamList,
};

export const createTeamStore = (initState: TeamState = defaultTeamList) => {
  return createStore<TeamStore>()((set) => ({
    ...initState,
    addTeamMember: (member) =>
      set((state) => ({ teamMembers: [...state.teamMembers, member] })),
    removeTeamMember: (userID) =>
      set((state) => ({
        teamMembers: state.teamMembers.filter(
          (member) => member.userID !== userID
        ),
      })),
    updateTeamMember: (userID, updatedMember) =>
      set((state) => ({
        teamMembers: state.teamMembers.map((member) =>
          member.userID === userID ? { ...member, ...updatedMember } : member
        ),
      })),
  }));
};
