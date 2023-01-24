import React from "react";
import { Breadcrumb } from "flowbite-react";

export default function Bread() {
  return (
    <Breadcrumb aria-label='Default breadcrumb' className='underline'>
      <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
      <Breadcrumb.Item href='#'>Gut Health</Breadcrumb.Item>
    </Breadcrumb>
  );
}
