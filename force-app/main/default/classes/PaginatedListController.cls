public with sharing class PaginatedListController {
    private static final Integer PAGE_SIZE = 1;

    public PaginatedListController(
        ApexPages.StandardSetController standardSetController
    ) {
        standardSetController.setPageSize(PAGE_SIZE);
    }
}
