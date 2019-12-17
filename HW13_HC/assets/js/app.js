//set svg and chart dimensions
var svgWidth = 1024;
var svgHeight = 768;
var margin = {
    top: 20,
    right: 40,
    bottom: 200,
    left: 100
};

//calculate chart height and width
var width = svgWidth - margin.right - margin.left;
var height = svgHeight - margin.top - margin.bottom;

//append chart to scatter element
var chart = d3.select("#scatter").append("div").classed("chart", true);

//append svg element to the chart with height and width outlined above
var svg = chart.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//append svg group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Initial X- and Y-axes
var pickXAxis = "poverty";
var pickYAxis = "healthcare";

//Function to change X-scale
function xScale(povData, pickXAxis) {
    //create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(povData, d => d[pickXAxis]) * 0.8,
            d3.max(povData, d => d[pickXAxis]) * 1.05])
        .range([0, width]);

    return xLinearScale;
}

//Function to change Y-scale
function yScale(povData, pickYAxis) {
    //create scales
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(povData, d => d[pickYAxis]) * 0.8,
            d3.max(povData, d => d[pickYAxis]) * 1.2])
        .range([height, 0]);

    return yLinearScale;
}

//Function to change X-axis
function renderAxesX(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;
}

//Function to change Y-axis
function renderAxesY(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);

    yAxis.transition()
        .duration(1000)
        .call(leftAxis);

    return yAxis;
}

//Create circles based on X- and Y-axes
function renderCircles(circlesGroup, newXScale, pickXAxis, newYScale, pickYAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cx", data => newXScale(data[pickXAxis]))
        .attr("cy", data => newYScale(data[pickYAxis]));

    return circlesGroup;
}

//Fuction to update states based on X- and Y-axes
function renderText(textGroup, newXScale, pickXAxis, newYScale, pickYAxis) {

    textGroup.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[pickXAxis]))
        .attr("y", d => newYScale(d[pickYAxis]));

    return textGroup;
}
//Add Tooltips for X-axis
function styleX(value, pickXAxis) {

    //poverty percentage
    if (pickXAxis === 'poverty') {
        return `${value}%`;
    }
    //median household income
    else if (pickXAxis === 'income') {
        return `$${value}`;
    }
    //age
    else {
        return `${value}`;
    }
}

//Function to update Tooltip
function updateToolTip(pickXAxis, pickYAxis, circlesGroup) {

    //poverty percentage
    if (pickXAxis === 'poverty') {
        var xLabel = "Poverty:";
    }
    //median household income
    else if (pickXAxis === 'income') {
        var xLabel = "Median Income:";
    }
    //age
    else {
        var xLabel = "Age:";
    }

    //percentage lacking healthcare
    if (pickYAxis === 'healthcare') {
        var yLabel = "No Healthcare:"
    }
    //percentage obese
    else if (pickYAxis === 'obesity') {
        var yLabel = "Obesity:"
    }
    //percentage smoker
    else {
        var yLabel = "Smokers:"
    }

    //initialize Tooltip
    var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-8, 0])
        .html(function(d) {
            return (`${d.state}<br>${xLabel} ${styleX(d[pickXAxis], pickXAxis)}<br>${yLabel} ${d[pickYAxis]}%`);
        });

    circlesGroup.call(toolTip);

    //add listener
    circlesGroup.on("mouseover", toolTip.show)
    .on("mouseout", toolTip.hide);

    return circlesGroup;
}

//Pull CSV data
d3.csv("./assets/data/data.csv").then(function(povData) {

    console.log(povData);

    //convert data into integers
    povData.forEach(function(data) {
        data.obesity = +data.obesity;
        data.income = +data.income;
        data.smokes = +data.smokes;
        data.age = +data.age;
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
    });

    //create linear scales
    var xLinearScale = xScale(povData, pickXAxis);
    var yLinearScale = yScale(povData, pickYAxis);

    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    //append X-axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    //append Y-axis
    var yAxis = chartGroup.append("g")
        .classed("y-axis", true)
        .call(leftAxis);

    //append circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(povData)
        .enter()
        .append("circle")
        .classed("stateCircle", true)
        .attr("cx", d => xLinearScale(d[pickXAxis]))
        .attr("cy", d => yLinearScale(d[pickYAxis]))
        .attr("r", 12)
        .attr("opacity", ".5");

    //append text
    var textGroup = chartGroup.selectAll(".stateText")
        .data(povData)
        .enter()
        .append("text")
        .classed("stateText", true)
        .attr("x", d => xLinearScale(d[pickXAxis]))
        .attr("y", d => yLinearScale(d[pickYAxis]))
        .attr("dy", 3)
        .attr("font-size", "10px")
        .text(function(d){return d.abbr});

    //Create group for all X-axis labels
    var xLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20 + margin.top})`);

    var povertyAxis = xLabelsGroup.append("text")
        .classed("aText", true)
        .classed("active", true)
        .attr("x", 0)
        .attr("y", 20)
        .attr("value", "poverty")
        .text("In Poverty (%)");

    var ageAxis = xLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 40)
        .attr("value", "age")
        .text("Age (Median)")

    var incomeAxis = xLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 60)
        .attr("value", "income")
        .text("Household Income (Median)")

    //Create group for all Y-axis labels
    var yLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${0 - margin.left/4}, ${(height/2)})`);

    var healthcareAxis = yLabelsGroup.append("text")
        .classed("aText", true)
        .classed("active", true)
        .attr("x", 0)
        .attr("y", 0 - 20)
        .attr("dy", "1em")
        .attr("transform", "rotate(-90)")
        .attr("value", "healthcare")
        .text("Lacks Healthcare (%)");

    var smokesAxis = yLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 0 - 40)
        .attr("dy", "1em")
        .attr("transform", "rotate(-90)")
        .attr("value", "smokes")
        .text("Smokes (%)");

    var obesityAxis = yLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 0 - 60)
        .attr("dy", "1em")
        .attr("transform", "rotate(-90)")
        .attr("value", "obesity")
        .text("Obese (%)");

    //update Tooltip
    var circlesGroup = updateToolTip(pickXAxis, pickYAxis, circlesGroup);

    //Event listener for X-axis
    xLabelsGroup.selectAll("text")
        .on("click", function() {
            //get value of selection
            var value = d3.select(this).attr("value");

            //see if value is the same as the current X-axis
            if (value != pickXAxis) {

                //If not, change X-axis to the value
                pickXAxis = value;

                //update x-scale for new data
                xLinearScale = xScale(povData, pickXAxis);

                //update x-axis with transition
                xAxis = renderAxesX(xLinearScale, xAxis);

                //update circles
                circlesGroup = renderCircles(circlesGroup, xLinearScale, pickXAxis, yLinearScale, pickYAxis);

                //update text
                textGroup = renderText(textGroup, xLinearScale, pickXAxis, yLinearScale, pickYAxis);

                //update tooltips
                circlesGroup = updateToolTip(pickXAxis, pickYAxis, circlesGroup);

                //Make value text bold
                if (pickXAxis === "poverty") {
                    povertyAxis.classed("active", true).classed("inactive", false);
                    ageAxis.classed("active", false).classed("inactive", true);
                    incomeAxis.classed("active", false).classed("inactive", true);
                }
                else if (pickXAxis === "age") {
                    povertyAxis.classed("active", false).classed("inactive", true);
                    ageAxis.classed("active", true).classed("inactive", false);
                    incomeAxis.classed("active", false).classed("inactive", true);
                }
                else {
                    povertyAxis.classed("active", false).classed("inactive", true);
                    ageAxis.classed("active", false).classed("inactive", true);
                    incomeAxis.classed("active", true).classed("inactive", false);
                }
            }
        });

    //Event listener for Y-axis
    yLabelsGroup.selectAll("text")
    .on("click", function() {
        //get value of selection
        var value = d3.select(this).attr("value");

        //see if value is the same as the current Y-axis
        if (value != pickYAxis) {

            //If not, change Y-axis to value
            pickYAxis = value;

            //update y-scale for new data
            yLinearScale = yScale(povData, pickYAxis);

            //update y-axis with transition
            yAxis = renderAxesY(yLinearScale, yAxis);

            //update circles
            circlesGroup = renderCircles(circlesGroup, xLinearScale, pickXAxis, yLinearScale, pickYAxis);

            //update text
            textGroup = renderText(textGroup, xLinearScale, pickXAxis, yLinearScale, pickYAxis)

            //update tooltips
            circlesGroup = updateToolTip(pickXAxis, pickYAxis, circlesGroup);

            //change classes to change bold text
            if (pickYAxis === "obesity") {
                obesityAxis.classed("active", true).classed("inactive", false);
                smokesAxis.classed("active", false).classed("inactive", true);
                healthcareAxis.classed("active", false).classed("inactive", true);
            }
            else if (pickYAxis === "smokes") {
                obesityAxis.classed("active", false).classed("inactive", true);
                smokesAxis.classed("active", true).classed("inactive", false);
                healthcareAxis.classed("active", false).classed("inactive", true);
            }
            else {
                obesityAxis.classed("active", false).classed("inactive", true);
                smokesAxis.classed("active", false).classed("inactive", true);
                healthcareAxis.classed("active", true).classed("inactive", false);
            }
        }
    });
    


    
});





