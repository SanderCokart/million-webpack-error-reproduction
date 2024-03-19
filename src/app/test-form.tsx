'use client';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {block} from "million/react";
import {useForm} from "react-hook-form";


const useRandomHook = () => {
  return {data:{}}
}

export const TestForm = () => {
  //million breaks when you call this hook.
  const form = useForm({})

  //this does not cause compile errors
  const {data} = useRandomHook()

  return (
    <form className="flex flex-col space-y-4">
      <label>
        <span>First Name</span>
        <Input placeholder="First Name"/>
      </label>
      <label>
        <span>Last Name</span>
        <Input placeholder="Last Name"/>
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const BlockTestForm = block(TestForm);