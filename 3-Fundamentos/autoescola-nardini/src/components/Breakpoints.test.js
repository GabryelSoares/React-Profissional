import { BreakpointSizes, breakAt } from "../styles/Breakpoints";

test.each([
    [BreakpointSizes.sm],
    [BreakpointSizes.md],
    [BreakpointSizes.lg],
    [BreakpointSizes.xl],
])("break at %ipx", (size) => {
    expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});