type NativeType = "void" | "float32" | "float64" | "int32" | "int64";

/**
 * A class representing a native DLL.
 */
declare class NativeModule {
    /**
     * Gets a module that's currently loaded.
     * 
     * The plugin needs the permission `Permission.SystemAccess` to use this.
     * 
     * This method is restricted to prevent cheating.
     * @param moduleName The module name, e.g. `"User32.dll"`
     */
    static get(moduleName: string): NativeModule | null;

    /**
     * The current handle of the module. Warning: will be truncated to Float64
     */
    readonly handle: number;

    /**
     * Calls a function.
     * 
     * This method is restricted to prevent cheating.
     * @param functionName The procedure name.
     * @param returnType The return type that is expected.
     * @param args Arguments to pass to the function. The maximum arguments is 10.
     */
    public call(functionName: string, returnType: NativeType, ...args: any[]): number | undefined;
}