import { deleteHabit } from "./habits-db";
import { deleteEventsForHabit } from "./habits-db";

export async function deleteHabitWithEvents(habitId: string) {
  await deleteEventsForHabit(habitId);
  await deleteHabit(habitId);
}
