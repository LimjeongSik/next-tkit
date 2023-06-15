"use client";

import styled from "styled-components";

export default function NotFound() {
    return <Block>404 Not Found</Block>;
}

const Block = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
`;
