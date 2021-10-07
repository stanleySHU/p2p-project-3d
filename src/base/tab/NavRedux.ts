type ActionType = 'push' | 'pop' | 'replace';

export type IinitialState = {
    readonly sceneIds: readonly string[]
}

export type Action = {
    type: ActionType,
    payload?: {
        id?: string,
        depth?: number 
    }
};

export const initialState: IinitialState = {
    sceneIds: []
}


export function reducer(state: IinitialState, action: Action): IinitialState {
    const { sceneIds } = state;
    switch (action.type) {
        case 'push': {
            return { sceneIds: [...sceneIds, action.payload?.id!] };
        }
        case 'pop': {
            if (sceneIds.length > 1) {
                return { sceneIds: sceneIds.slice(0, sceneIds.length - 1) }
            }
            break;
        }
        case 'replace': {
            const { depth, id } = action.payload!;
            const ids = [...sceneIds];
            ids.splice(Math.max(0, sceneIds.length - depth!), depth!, id!);
            return { sceneIds: ids }
        }
    }
    return state;
}

export function push(id: string): Action {
    return {
        type: 'push',
        payload: {
            id: id
        }
    }
}

export function pop(): Action {
    return {
        type: 'pop'
    }
}

export function replace(id: string, depth: number = 1): Action {
    return {
        type: 'replace',
        payload: {
            id: id,
            depth: depth
        }
    }
}

