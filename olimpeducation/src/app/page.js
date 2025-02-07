'use server'

import ChoiceAndTasks from "./components/choice";
import PreView from "./components/preView";

export default function Home() {
  return (
    <>
      <PreView />
      <ChoiceAndTasks />
    </>
  );
}
