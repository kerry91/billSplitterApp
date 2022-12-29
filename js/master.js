var app = angular.module('billSplitter', []);

    app.controller('appController', ($scope) => {

        $scope.tipTablePercentages = [5, 10, 12, 15, 18, 20, 25];

        $scope.calcTip = (amount, percentage) => {
            return (amount * percentage / 100).toFixed(2);
        }

        $scope.$watchGroup(['billAmount', 'tipPercentage', 'partySize'], () => {
            $scope.tipCalculated = $scope.calcTip($scope.billAmount, $scope.tipPercentage);
            $scope.total = Number($scope. billAmount) + Number($scope.tipCalculated);
            $scope.perParty = ($scope.total / $scope.partySize).toFixed(2);
            $scope.oddChange = $scope.perParty * $scope.partySize - $scope.total;
        });
    });