import { SearchkitComponent, PaginationAccessor } from "../../../../core";
export interface IPagination {
}
export declare enum DIRECTION {
    NEXT = 0,
    PREVIOUS = 1,
}
export declare class Pagination extends SearchkitComponent<IPagination, any> {
    accessor: PaginationAccessor;
    defineAccessor(): PaginationAccessor;
    hasPagination(): boolean;
    getCurrentPage(): number;
    setPage(direction: DIRECTION): void;
    isDisabled(direction: DIRECTION): boolean;
    paginationElement(direction: DIRECTION, cssClass: string, displayText: string): JSX.Element;
    render(): JSX.Element;
}
