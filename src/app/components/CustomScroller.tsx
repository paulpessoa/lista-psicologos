"use client";

import { useEffect, useRef } from "react";
import { CSSProperties, ReactNode } from "react";

export const CustomScroller = ({
    children,
    style,
}: {
    children: ReactNode;
    style?: CSSProperties;
}) => {
    const scroller = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = scroller.current;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const mouseDown = (e: MouseEvent) => {
            isDown = true;
            element?.classList.add("active");
            startX = e.pageX - element!.offsetLeft;
            scrollLeft = element!.scrollLeft;
        };
        const mouseLeave = () => {
            isDown = false;
            element?.classList.remove("active");
        };
        const mouseUp = () => {
            isDown = false;
            element?.classList.remove("active");
        };
        const mouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - element!.offsetLeft;
            const walk = x - startX;
            element!.scrollLeft = scrollLeft - walk;
        };

        element?.addEventListener("mousedown", mouseDown);
        element?.addEventListener("mouseleave", mouseLeave);
        element?.addEventListener("mouseup", mouseUp);
        element?.addEventListener("mousemove", mouseMove);

        return () => {
            element?.removeEventListener("mousedown", mouseDown);
            element?.removeEventListener("mouseleave", mouseLeave);
            element?.removeEventListener("mouseup", mouseUp);
            element?.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <div
            ref={scroller}
            style={{
                display: "grid",
                gap: "16px", // Using '16px' for gap instead of a number 
                gridAutoFlow: "column",
                overflowX: "hidden",
                "&:hover": {   // Nested style for :hover
                    overflowX: "scroll",
                    cursor: "grab",
                },

                paddingBlock: "8px", // Using 'paddingBlock' instead of 'py'
                overscrollBehaviorInline: "contain",
                scrollSnapType: "inline mandatory",
                scrollPaddingInline: "1rem",
                "&::-webkit-scrollbar": {
                    height: "0.0em",
                },
                "&.active": {
                    cursor: "grabbing",
                },
                ...style,
            }}
        >
            {children}
        </div>
    );
};
