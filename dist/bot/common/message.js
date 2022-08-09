"use strict";
/* Copyright © Inertia Lighting | All Rights Reserved */
Object.defineProperty(exports, "__esModule", { value: true });
//---------------------------------------------------------------------------------------------------------------//
const discord_client_js_1 = require("../discord_client.js");
//---------------------------------------------------------------------------------------------------------------//
/**
 * Disables all message components on a message.
 */
function disableMessageComponents(message) {
    if (!(message instanceof discord_client_js_1.Discord.Message))
        throw new TypeError('message must be an instance of Discord.Message');
    return message.fetch(true).then(message => message.edit({
        embeds: message.embeds,
        components: message.components.map(component_row => ({
            ...component_row.toJSON(),
            components: component_row.components.map(component => ({
                ...component.toJSON(),
                disabled: true,
            })),
        })),
    }));
}
//---------------------------------------------------------------------------------------------------------------//
module.exports = {
    disableMessageComponents,
};
//# sourceMappingURL=message.js.map