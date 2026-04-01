(() => {

    let nullable: null | string;
    let undefinable: undefined | string;


    nullable = null;
    console.log("nullable:", nullable)

    nullable = "Hello World";
    console.log("nullable:", nullable)

    undefinable = undefined;
    console.log("undefinable:", undefinable)
})();