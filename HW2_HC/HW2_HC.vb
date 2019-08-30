Sub Stock_Loop():

    ' Loop through each tab
    For Each ws In Worksheets

        ' Column Titles
        ws.Range("I1").Value = "Ticker"
        ws.Range("J1").Value = "Yearly Change"
        ws.Range("K1").Value = "Percent Change"
        ws.Range("L1").Value = "Total Stock Volume"
        ws.Range("O2").Value = "Greatest % Increase"
        ws.Range("O3").Value = "Greatest % Decrease"
        ws.Range("O4").Value = "Greatest Total Volume"
        ws.Range("P1").Value = "Ticker"
        ws.Range("Q1").Value = "Value"

        ' Initialize Variables
        Dim TickerName As String
        Dim LastRow As Long
        Dim TotalTickerVolume As Double
        Dim SummaryTableRow As Long
        Dim YearlyOpen As Double
        Dim YearlyClose As Double
        Dim YearlyChange As Double
        Dim PreviousAmount As Long
        Dim PercentChange As Double
        Dim GreatestIncrease As Double
        Dim GreatestDecrease As Double
        Dim LastRowValue As Long
        Dim GreatestTotalVolume As Double

        ' Set variables to initial value
        TotalTickerVolume = 0
        SummaryTableRow = 2
        PreviousAmount = 2
        GreatestIncrease = 0
        GreatestDecrease = 0
        GreatestTotalVolume = 0
        
        ' Find last row
        LastRow = ws.Cells(Rows.Count, 1).End(xlUp).Row
        
        ' Loop through ticker data
        For i = 2 To LastRow

            ' Add To Ticker Total Volume
            TotalTickerVolume = TotalTickerVolume + ws.Cells(i, 7).Value
            
            ' Conditional to determine if new ticker has appeared
            If ws.Cells(i + 1, 1).Value <> ws.Cells(i, 1).Value Then

                ' Ticker Name
                TickerName = ws.Cells(i, 1).Value
                
                ' Paste ticker name
                ws.Range("I" & SummaryTableRow).Value = TickerName
                
                ' Paste ticker volume
                ws.Range("L" & SummaryTableRow).Value = TotalTickerVolume
                
                ' Reset ticker volume
                TotalTickerVolume = 0

                ' Set annual data
                YearlyOpen = ws.Range("C" & PreviousAmount)
                YearlyClose = ws.Range("F" & i)
                YearlyChange = YearlyClose - YearlyOpen
                ws.Range("J" & SummaryTableRow).Value = YearlyChange

                ' Find percent change
                If YearlyOpen = 0 Then
                    PercentChange = 0
                Else
                    YearlyOpen = ws.Range("C" & PreviousAmount)
                    PercentChange = YearlyChange / YearlyOpen
                End If
                
                ' Format "Percent Change" column
                ws.Range("K" & SummaryTableRow).NumberFormat = "0.00%"
                ws.Range("K" & SummaryTableRow).Value = PercentChange

                ' Highlight positive price performance green and negative red
                If ws.Range("J" & SummaryTableRow).Value >= 0 Then
                    ws.Range("J" & SummaryTableRow).Interior.ColorIndex = 4
                Else
                    ws.Range("J" & SummaryTableRow).Interior.ColorIndex = 3
                End If
            
                ' Go to next row
                SummaryTableRow = SummaryTableRow + 1
                PreviousAmount = i + 1
                End If
            Next i

            LastRow = ws.Cells(Rows.Count, 11).End(xlUp).Row
        
            ' Find summary output (max %, min %, max vol)
            For i = 2 To LastRow
                If ws.Range("K" & i).Value > ws.Range("Q2").Value Then
                    ws.Range("Q2").Value = ws.Range("K" & i).Value
                    ws.Range("P2").Value = ws.Range("I" & i).Value
                End If

                If ws.Range("K" & i).Value < ws.Range("Q3").Value Then
                    ws.Range("Q3").Value = ws.Range("K" & i).Value
                    ws.Range("P3").Value = ws.Range("I" & i).Value
                End If

                If ws.Range("L" & i).Value > ws.Range("Q4").Value Then
                    ws.Range("Q4").Value = ws.Range("L" & i).Value
                    ws.Range("P4").Value = ws.Range("I" & i).Value
                End If

            Next i
        ' Format summary data
            ws.Range("Q2").NumberFormat = "0.00%"
            ws.Range("Q3").NumberFormat = "0.00%"
            
        ' Autofit newly outputted data
        ws.Columns("I:Q").AutoFit

    Next ws

End Sub