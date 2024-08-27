import { Component } from 'vue';

export interface TechnologyButtonProps {
    logo: Component;  // Changed from string to Component to accept Vue components
    name: string;
}