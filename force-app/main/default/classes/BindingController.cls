public with sharing class BindingController {
    public String courseName { get; set; }

    public BindingController() {
        // Changing this value will cause the test assertion to fail
        courseName = 'Changed Value'; 
    }
}
