"use client";

import { ChildrenProps } from "@/interface/Interface";
import styled from "styled-components";

export default function BasicTemplate({ children }: ChildrenProps) {
    return <Template>{children}</Template>;
}

const Template = styled.div``;
