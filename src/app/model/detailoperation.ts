export interface Detailoperation {
  operationDTOList: OperationList[];
  currentPage:      number;
  totalPages:       number;
  pageSize:         number;
}

export interface OperationList {
  idOperation:      number;
  dateOperation:    Date;
  montantOperation: number;
  typeOperation:    string;
  rib:              string;
}
