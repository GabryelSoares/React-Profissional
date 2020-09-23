import React from 'react';
import { text } from '@storybook/addon-knobs'

import Heading from "./Heading";

export default {
    title: "Components/Heading",
    component: Heading
};

export const usage = () => (
    <div>
        <Heading>
            <h1>{text('Título h1', 'Título h1')}</h1>
        </Heading>
        <Heading>
            <h2>{text('Título h2', 'Título h2')}</h2>
        </Heading>
        <Heading>
            <h3>{text('Título h3', 'Título h3')}</h3>
        </Heading>
        <Heading>
            <h4>{text('Título h4', 'Título h4')}</h4>
        </Heading>
        <Heading>
            <h5>{text('Título h5', 'Título h5')}</h5>
        </Heading>
        <Heading>
            <h6>{text('Título h6', 'Título h6')}</h6>
        </Heading>
    </div>
);