type Color = 'Black' | 'White'
type FileLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type RankNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
        return [
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            new Queen('White', 'D', 1),
            new Queen('White', 'D', 8),
            //Bishops
            //Knights
            //Rooks
            //Pawns
        ]
    }
}

abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: FileLetter,
        rank: RankNumber
    ) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }

    abstract canMoveTo(position: Position): boolean
}

class Position {
    constructor(
        private file: FileLetter,
        private rank: RankNumber
    ) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

// Cannot create an instance of an abstract class.
//new Piece('White', 'E', 1)