import { Type, Factory } from '../utils/customType';

interface ProviderOptions {
    get: (...args: unknown[]) => void;
}

class ValueProvider implements ProviderOptions {
    constructor(private readonly value: unknown) {}
    get(...args: unknown[]) { return this.value; }
}

class TypeProvider implements ProviderOptions {
    constructor(private readonly type: Type) {}
    get(...args: unknown[]) { new this.type(...args) }
}

class SingletonProvider implements ProviderOptions {
    private instance: unknown;
    constructor(private readonly type: Type) {}
    get (...args: unknown[]) {
        if (!this.instance) {
            this.instance = new this.type(...args);
        }
        return this.instance;
    }
}

class FactoryProvider implements ProviderOptions {
    constructor(private readonly factory : Factory ) {}
    get(...args: unknown[]) { return this.factory(...args); }
}

class InjectionMapping {
    private provider?: ProviderOptions;
    
    get(...args: unknown[]): unknown {
        return this.provider?.get(...args);
    }

    toValue(value: unknown) {
        this.provider = new ValueProvider(value);
    }

    toType(type: Type) {
        this.provider = new TypeProvider(type);
    }

    toSingleton(type: Type) {
        this.provider = new SingletonProvider(type);
    }

    toFactory(factory: Factory) {
        this.provider = new FactoryProvider(factory);
    }    
}

class Injector {
    private readonly mappings: Map<string, InjectionMapping>;

    constructor() {
        this.mappings = new Map();
    }

    map(key: string): InjectionMapping {
        let mapping = new InjectionMapping();
        this.mappings.set(key, mapping);
        return mapping;
    }

    unmap(key: string) {
        this.mappings.delete(key);
    }

    get(key: string, ...args: unknown[]): unknown {
        let mapping = this.mappings.get(key);
        return mapping?.get(...args);
    }
}

const injector = new Injector();
export default injector;