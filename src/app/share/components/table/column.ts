export class Column<T> {
    field: string;
    header: string;
    value: (T: any) => any;
    width = '20%';

    constructor(field: string, header: string, value: (item: T) => any, width: string) {
        this.field = field;
        this.header = header;
        this.value = value;
        this.width = width;
    }
}