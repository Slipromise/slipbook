import MatrixTextEffect from "@/components/MatrixTextEffect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    component: MatrixTextEffect,
    tags: ["autodocs"],
    parameters:{
        layout: 'fullscreen',
    }
} satisfies Meta<typeof MatrixTextEffect>; 

export default meta;

type Story = StoryObj<typeof MatrixTextEffect>;

export const Default: Story = {
    args: {},
} 


export const Emoji: Story = {
    args:{
        text:'☺︎☹︎☠︎❣︎❤︎☘︎⛸︎♠︎♥︎♦︎♣︎♟︎⛷︎⛰︎⛩︎♨︎⛴︎✈︎☀︎⏱︎⏲︎☁︎⛈︎☂︎⛱︎❄︎☃︎☄︎⛑︎☎︎⌨︎✏︎✒︎✉︎✂︎⛏︎⚒︎⚔︎⚙︎⚖︎⛓︎⚗︎⚰︎⚱︎⚠︎☢︎☣︎⬆︎↗︎➡︎↘︎⬇︎↙︎⬅︎↖︎↕︎↔︎↩︎↪︎⤴︎⤵︎⚛︎✡︎☸︎☯︎✝︎☦︎☪︎☮︎▶︎⏭︎⏯︎◀︎⏮︎⏸︎⏹︎⏺︎⏏︎♀︎♂︎⚧︎✖︎♾︎‼︎⁉︎⚕︎♻︎⚜︎☑︎✔︎〽︎✳︎✴︎❇︎©︎®︎™︎🅰︎🅱︎ℹ︎Ⓜ︎🅾︎🅿︎🈂︎🈷︎㊗︎㊙︎◼︎◻︎▪︎▫︎',
        fontSize:20,
    }
}