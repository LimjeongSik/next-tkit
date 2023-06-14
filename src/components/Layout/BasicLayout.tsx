"use client";

import styled from "styled-components";
import { ChildrenProps } from "@/interface/Interface";

export default function BasicLayout({ children }: ChildrenProps) {
    return <Block>{children}</Block>;
}

const Block = styled.div`
    width: 100%;
    height: 100%;
`;
