declare const enum Permission {
    SystemAccess = "permission.system_access",
}

interface IPlugin {
    readonly name: string;
    readonly author: string;
    readonly version: string;
    readonly description: string;

    /**
     * Requests a permission.
     * @param permission The permissions to request.
     * @returns Whether or not the permission was requested.
     */
    requestPermission(permission: Permission): boolean;    
}

declare const plugin: IPlugin;