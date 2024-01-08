import React, { MutableRefObject, SetStateAction } from "react";
import { IOccasionState } from "../components/month/hooks/useMonthDays";

export function editOccasionValue(
  setIsEdit: React.Dispatch<SetStateAction<boolean>>,
  inputRef: MutableRefObject<HTMLInputElement | null>
) {
  setIsEdit((prev) => !prev);
  inputRef?.current?.focus();
}

export async function deleteOccasion(
  id: number,
  setIsModal: React.Dispatch<SetStateAction<boolean>>,
  occasionDays: IOccasionState[] | undefined,
  currentDay: number | undefined | null
) {
  if (id) {
    await fetch(`http://localhost:9999/specialDays/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  occasionDays?.filter((date) => date.day === currentDay);
  setIsModal(false);
}

export async function saveOccasionValue(
  occasionValue: string,
  currentOccasionDate: IOccasionState | null,
  setIsModal: React.Dispatch<SetStateAction<boolean>>
) {
  if (currentOccasionDate) {
    await fetch(`http://localhost:9999/specialDays/${currentOccasionDate.id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: occasionValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  setIsModal(false);
}
