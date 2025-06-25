"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file will export all common types and interfaces. 
__exportStar(require("./types/common.types"), exports);
__exportStar(require("./types/account.types"), exports);
__exportStar(require("./types/chatwoot-platform.types"), exports);
__exportStar(require("./types/inbox.types"), exports);
__exportStar(require("./types/user.types"), exports);
__exportStar(require("./types/conversation.types"), exports);
__exportStar(require("./types/message.types"), exports);
__exportStar(require("./types/custom-agent.types"), exports);
// Utilities
__exportStar(require("./utils/name-generator"), exports);
