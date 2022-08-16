"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
test("Board constructor", () => {
    const boardString = "095078342000041060467039501080400000506000290000090805804900003000050020051360000";
    let boardValues = Array(81);
    for (let i = 0; i < 81; ++i)
        boardValues[i] = parseInt(boardString.substring(i, i + 1));
    expect(() => new index_1.default(boardValues)).not.toThrow(Error);
    expect(() => new index_1.default([0])).toThrow(Error);
});
test("Board get square", () => {
    const boardString = "095078342000041060467039501080400000506000290000090805804900003000050020051360000";
    let boardValues = Array(81);
    for (let i = 0; i < 81; ++i)
        boardValues[i] = parseInt(boardString.substring(i, i + 1));
    let board = new index_1.default(boardValues);
    expect(board.getSquare(0, 0).value).toBe(0);
    expect(board.getSquare(0, 1).value).toBe(9);
    expect(board.getSquare(0, 2).value).toBe(5);
    expect(board.getSquare(8, 2).value).toBe(1);
});
test("Board is valid", () => {
    const boardString = "095078342000041060467039501080400000506000290000090805804900003000050020051360000";
    let boardValues = Array(81);
    for (let i = 0; i < 81; ++i)
        boardValues[i] = parseInt(boardString.substring(i, i + 1));
    let board = new index_1.default(boardValues);
    expect(board.isValid()).toBe(true);
});
test("Board asString", () => {
    const boardString = "095078342000041060467039501080400000506000290000090805804900003000050020051360000";
    let boardValues = Array(81);
    for (let i = 0; i < 81; ++i)
        boardValues[i] = parseInt(boardString.substring(i, i + 1));
    let board = new index_1.default(boardValues);
    expect(board.asString()).toBe(boardString);
});
test("Solve board", () => {
    const boardString = "095078342000041060467039501080400000506000290000090805804900003000050020051360000";
    const boardSolution = "195678342238541967467239581389425716516783294742196835824917653673854129951362478";
    let boardValues = Array(81);
    for (let i = 0; i < 81; ++i)
        boardValues[i] = parseInt(boardString.substring(i, i + 1));
    let board = new index_1.default(boardValues).solve();
    expect(board.asString()).toBe(boardSolution);
});
test("Solve board with callback fn", () => {
    const boardString = "095078342000041060467039501080400000506000290000090805804900003000050020051360000";
    const boardSolution = "195678342238541967467239581389425716516783294742196835824917653673854129951362478";
    const lastTwo = [];
    const callBack = (board) => {
        if (lastTwo.length < 2)
            lastTwo.push(board.asString());
        else {
            lastTwo[0] = lastTwo[1];
            lastTwo[1] = board.asString();
        }
    };
    let boardValues = Array(81);
    for (let i = 0; i < 81; ++i)
        boardValues[i] = parseInt(boardString.substring(i, i + 1));
    new index_1.default(boardValues).solve(callBack);
    expect(lastTwo[0]).toBe("195678342238541967467239581389425716516783294742196835824917653673854129951362477");
    expect(lastTwo[1]).toBe(boardSolution);
});
