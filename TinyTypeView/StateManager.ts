export class RelationalStateManager {
    public boundItem :any= {};

    public SetProperty(type: string, id: any, object:any ) : void {
        this.boundItem[type] = this.boundItem[type] || {};
        this.boundItem[type][id] = object;

        //TODO: lookup structure and setup mappings. 
        //TODO: mark item as added/changed and push events
    }
    
    public GetProperty(type: string, id: any) : any {
        if (this.boundItem[type]&&this.boundItem[type][id]){
            return this.boundItem[type][id];
        }
        return null;
        
    }

    public RemoveProperty(type:string, id:any): void {
        // Remove item and any stored relationships.
        // Remove boundItem empty array if needed.
    }

    public GetChildren(childType: string, parentType:string, parentId: any): any{

    }    

    public DefineStructure(childType: string, parentType: string, parentIdProperty: string, childSortingProperty:string) : void {
        // Store relationships.  Child to parent.  Parent to [children]; Each should be single ID lookup
    }

}


export class StateNode {

}