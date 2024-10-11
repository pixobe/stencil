import { Component, h } from '@stencil/core';

@Component({
    tag: 'icon-help',
})
export class IconHelp {
    render() {
        return (
            <svg viewBox="0 0 24 24" width="100%" height="100%" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7 9C7 7.87439 7.37194 6.83566 7.99963 6C8.91184 4.78555 10.3642 4 12 4C14.7614 4 17 6.23858 17 9C17 11.4212 15.279 13.4405 12.9936 13.9013C12.4522 14.0104 12 14.4477 12 15V15V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </g>
            </svg>
        )
    }
}
