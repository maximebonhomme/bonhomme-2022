//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import './SVG.sol';
import './Utils.sol';

contract Renderer {
    string[6] public colors = [
        '#2d9cdb',
        '#9b51e0',
        '#f2994a',
        '#eb5757',
        '#27ae60',
        '#f2c94c'
    ];
    uint256 public constant PX_SIZE = 300;

    function getShape(
        uint256 _seed,
        uint256 _x,
        uint256 _y
    ) internal view returns (string memory) {
        string memory stringX = utils.uint2str(_x);
        string memory stringY = utils.uint2str(_y);
        uint256 color = utils.getRandomInteger(
            string.concat('color', stringX, stringY),
            _seed,
            0,
            6
        );
        uint256 circleOrRect = utils.getRandomInteger(
            string.concat('shape', stringX, stringY),
            _seed,
            0,
            10
        );
        string memory shape;

        if (circleOrRect < 5) {
            shape = svg.circle(
                string.concat(
                    svg.prop('fill', colors[color]),
                    svg.prop('cx', utils.uint2str(_x + (PX_SIZE / 2))),
                    svg.prop('cy', utils.uint2str(_y + (PX_SIZE / 2))),
                    svg.prop('r', utils.uint2str(PX_SIZE / 2)),
                    svg.prop('width', utils.uint2str(PX_SIZE)),
                    svg.prop('height', utils.uint2str(PX_SIZE))
                ),
                utils.NULL
            );
        } else {
            shape = svg.rect(
                string.concat(
                    svg.prop('fill', colors[color]),
                    svg.prop('x', stringX),
                    svg.prop('y', stringY),
                    svg.prop('width', utils.uint2str(PX_SIZE)),
                    svg.prop('height', utils.uint2str(PX_SIZE))
                ),
                utils.NULL
            );
        }

        return shape;
    }

    function getRow(uint256 _seed, uint256 _y)
        internal
        view
        returns (string memory)
    {
        return
            string.concat(
                getShape(_seed, 0, _y),
                getShape(_seed, 300, _y),
                getShape(_seed, 600, _y)
            );
    }

    function render(uint256 _seed) public view returns (string memory) {
        return
            string.concat(
                '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 900 900" width="900" height="900">',
                getRow(_seed, 0),
                getRow(_seed, 300),
                getRow(_seed, 600),
                '</svg>'
            );
    }

    function example() external view returns (string memory) {
        uint256 seed = uint256(
            uint160(0xFF5FE6e0D3D48c90A66217dd4A7560a3ed8dACD2)
        );
        return render(seed);
    }
}
