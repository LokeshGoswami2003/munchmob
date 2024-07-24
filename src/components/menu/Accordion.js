import React, { forwardRef } from "react";

const Accordion = forwardRef(({ title, expanded, onToggle, children }, ref) => {
    return (
        <div ref={ref} className="rounded-lg shadow-md">
            <button
                className="w-2/3 text-left mx-28 py-2 font-semibold text-dark rounded-t-lg focus:outline-none"
                onClick={onToggle}
            >
                {title}
            </button>
            {expanded && (
                <div className="px-4 py-2 bg-primary rounded-b-lg">
                    {children}
                </div>
            )}
        </div>
    );
});

export default Accordion;
