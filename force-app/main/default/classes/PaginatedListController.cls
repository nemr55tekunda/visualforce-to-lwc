public with sharing class PaginatedListController {
    // CHANGE: Changing this to 10 will cause the test assertion (which expects 5) to fail.
    private static final Integer PAGE_SIZE = 10; 

    public PaginatedListController(
        ApexPages.StandardSetController standardSetController
    ) {
        standardSetController.setPageSize(PAGE_SIZE);
    }
}
