import React from 'react';

import Accordion, { AccordionGroup } from 'components/atoms/Accordion';

export default {
    title: 'Components/Atoms/Accordion',
    component: Accordion,
}

export const usage = () => (
    <>
        <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab eius debitis suscipit temporibus quia assumenda tempore dolore, modi odit commodi, repudiandae labore libero iure magni, dignissimos fugiat nostrum. Nam.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab eius debitis suscipit temporibus quia assumenda tempore dolore, modi odit commodi, repudiandae labore libero iure magni, dignissimos fugiat nostrum. Nam.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab eius debitis suscipit temporibus quia assumenda tempore dolore, modi odit commodi, repudiandae labore libero iure magni, dignissimos fugiat nostrum. Nam.
        </Accordion>
    </>
);

export const withGroup = () => (
    <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab eius debitis suscipit temporibus quia assumenda tempore dolore, modi odit commodi, repudiandae labore libero iure magni, dignissimos fugiat nostrum. Nam.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab eius debitis suscipit temporibus quia assumenda tempore dolore, modi odit commodi, repudiandae labore libero iure magni, dignissimos fugiat nostrum. Nam.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab eius debitis suscipit temporibus quia assumenda tempore dolore, modi odit commodi, repudiandae labore libero iure magni, dignissimos fugiat nostrum. Nam.
        </Accordion>
    </AccordionGroup>
);