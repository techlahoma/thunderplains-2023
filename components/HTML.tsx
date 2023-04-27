import * as React from 'react';

export function defineElement(tag: string, classList?: string, moreProps?: any) {
  return function TagElement(props: any) {
    let className = classList;

    if (props.className) {
      className += ' ' + props.className;
    }

    return React.createElement(tag, { className, ...moreProps, ...props });
  };
}

// Standard styled elements...
export const H1 = defineElement('h1', 'mb-8 text-4xl font-bold');
export const H2 = defineElement('h2', 'mb-4 text-3xl font-bold');
export const H3 = defineElement('h3', 'mb-4 text-2xl font-bold');
export const Small = defineElement('p', 'text-xs');
