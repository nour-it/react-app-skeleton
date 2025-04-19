import Dexie from 'dexie';

class StoreDatabase extends Dexie {
    storeData!: Dexie.Table<{key: string, value: string}, string>;

    constructor() {
        super('StoreDatabase');
        this.version(1).stores({
            storeData: 'key'
        });
    }
}

const db = new StoreDatabase();

export const initDatabase = async () => {
    try {
        await db.open();
        return true;
    } catch (error) {
        console.error('Database initialization error:', error);
        return false;
    }
};

export const dbService = {
    get: async (key: string) => {
        try {
            const row = await db.storeData.get(key);
            return row ? JSON.parse(row.value) : null;
        } catch (error) {
            console.error('Database get error:', error);
            return null;
        }
    },
    set: async (key: string, value: any) => {
        try {
            await db.storeData.put({ key, value: JSON.stringify(value) });
            return true;
        } catch (error) {
            console.error('Database set error:', error);
            return false;
        }
    }
};
