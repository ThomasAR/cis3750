$(document).ready(function() {

    console.log("test")
    $("#map-select-reyn").click(function(){
        console.log($(this).val())
    })

    $(".map-select")
    $(".dropdown-menu").on("change", function(){
        console.log("test")
    })


})
var test_function = function(building_code){

    var buildings = {
        reyn: {
            name: "Reynolds Building",
            description: "Joseph Benson Reynolds (1867-1948) first came to the Ontario Agricultural College in 1893 after finishing first in his class in physics and mathematics at the University of Toronto. He was responsible for introducing soil analysis in the physics program and involved the department in farm drainage surveys, which ultimately led to much improved crop yields. Reynolds went on to become the Head of English, as this was his first love. He exposed students to great literature, composition and public speaking. Reynolds established a course in Canadian literature, a first for any school of higher learning in Canada. Finally, Reynolds served as president of OAC from 1920-1928. The Reynolds Building was built in 1915 for the study of Physics and Mathematics. The plaque is located outside on the right hand side of the entrance of Reynolds Building.",
            map: "images/campus_map_reynolds.png"
        },
        thrn: {
            name: "Albert A. Thornbrough Building",
            description: "The Albert A. Thornbrough building was opened on June 23, 1973. It was named after Albert A. Thornbrough, president of Massey-Ferguson Ltd., and Vice-Chairman of the University Board of Directors and Chairman of the University Finance Committee from 1968 to 1973. Massey-Ferguson Ltd., a major agricultural equipment manufacturer donated $750,000 toward the $2,000,000 building costs",
            map: "images/campus_map_thorn.png"
        }
    }

    var building = buildings[building_code];
    $(".map-building-name").text(building.name);
    $(".map-building-description").text(building.description);
    $(".map-image").attr("src", building.map);


}