import React, { useEffect, useReducer, useRef, useState } from "react";

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLS = 20;
const INTERVAL_TIME = 200;

enum SnakeGridElementState {
  EMPTY,
  SNAKE_HEAD,
  SNAKE_BODY,
  FOOD,
}

enum GameState {
  READY,
  PLAYING,
  PAUSED,
  ENDED,
}

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function SnakeGame() {
  const [gameState, setGameState] = useState(GameState.READY);
  const previousGameState = usePrevious(gameState);
  const [gameInterval, setGameInterval] = useState<NodeJS.Timer>();

  const [snakeGrid, setSnakeGrid] = useState<SnakeGridElementState[][]>([]);
  const [, setSnakePositions] = useState<[number, number][]>([]);
  const [, setNextDirection] = useState(Direction.Right);

  const resetGrid = () => {
    setSnakeGrid(
      Array(NUMBER_OF_ROWS)
        .fill(SnakeGridElementState.EMPTY)
        .map(() => Array(NUMBER_OF_COLS).fill(SnakeGridElementState.EMPTY))
    );
  };

  useEffect(() => {
    resetGrid();
    document.addEventListener("keydown", handleKeypress);
  }, []);

  useEffect(() => {
    if (gameState === GameState.PLAYING) {
      if (previousGameState === GameState.ENDED) {
        setSnakePositions([]);
        resetGrid();
      }

      setGameInterval((prevInterval) => {
        clearInterval(prevInterval);
        return setInterval(doOneGameStep, INTERVAL_TIME);
      });
    } else {
      setGameInterval((prevInterval) => {
        clearInterval(prevInterval);
        return undefined;
      });
      if (gameState === GameState.READY) {
        resetGrid();
        setSnakePositions([]);
      }
    }

    return () => clearInterval(gameInterval);
  }, [gameState]);

  const handleKeypress = (ev: KeyboardEvent) => {
    setGameState((prevState) => {
      if (ev.key === " ") {
        if (prevState === GameState.PLAYING) return GameState.PAUSED;
        return GameState.PLAYING;
      }

      if (ev.key === "Escape") {
        if (prevState !== GameState.ENDED) {
          return GameState.READY;
        }
      }

      if (ev.key.toLocaleLowerCase() === "w") setNextDirection(Direction.Up);
      if (ev.key.toLocaleLowerCase() === "a") setNextDirection(Direction.Left);
      if (ev.key.toLocaleLowerCase() === "s") setNextDirection(Direction.Down);
      if (ev.key.toLocaleLowerCase() === "d") setNextDirection(Direction.Right);

      return prevState;
    });
  };

  const getRandomPosition = (): [number, number] => {
    return [
      Math.floor(Math.random() * (NUMBER_OF_ROWS - 1)),
      Math.floor(Math.random() * (NUMBER_OF_COLS - 1)),
    ];
  };

  const getRandomNotBlockedPosition = (
    blockedPositions: [number, number][]
  ) => {
    let position = getRandomPosition();

    while (
      blockedPositions.some(
        (blockedPosition) =>
          blockedPosition[0] === position[0] &&
          blockedPosition[1] === position[1]
      )
    ) {
      position = getRandomPosition();
    }

    return position;
  };

  const doOneGameStep = () => {
    setSnakeGrid((prevGrid) => {
      const updatedGrid = [...prevGrid.map((row) => [...row])];
      setNextDirection((direction) => {
        setSnakePositions((prevSnakePositions) => {
          const newGameStarted = prevSnakePositions.length === 0;

          // Generate first snake element if game started
          const updatedSnakePositions = newGameStarted
            ? [[0, 0] as [number, number]]
            : prevSnakePositions;

          // Generate food at random position if game started
          if (newGameStarted) {
            const newFoodPosition = getRandomNotBlockedPosition([
              updatedSnakePositions[0],
            ]);

            updatedGrid[newFoodPosition[0]][newFoodPosition[1]] =
              SnakeGridElementState.FOOD;
          } else {
            let nextPosition = [...updatedSnakePositions[0]];

            // Set next position for snake head
            switch (direction) {
              case Direction.Up: {
                updatedSnakePositions[0][0] =
                  (nextPosition[0] + NUMBER_OF_ROWS - 1) % NUMBER_OF_ROWS;
                updatedSnakePositions[0][1] = nextPosition[1];
                break;
              }
              case Direction.Right: {
                updatedSnakePositions[0][0] = nextPosition[0];
                updatedSnakePositions[0][1] =
                  (nextPosition[1] + NUMBER_OF_COLS + 1) % NUMBER_OF_COLS;
                break;
              }
              case Direction.Down: {
                updatedSnakePositions[0][0] =
                  (nextPosition[0] + NUMBER_OF_ROWS + 1) % NUMBER_OF_ROWS;
                updatedSnakePositions[0][1] = nextPosition[1];
                break;
              }
              case Direction.Left: {
                updatedSnakePositions[0][0] = nextPosition[0];
                updatedSnakePositions[0][1] =
                  (nextPosition[1] + NUMBER_OF_COLS - 1) % NUMBER_OF_COLS;
                break;
              }
            }

            // Move every snake-body one step
            for (let snakeElem of updatedSnakePositions.slice(1)) {
              let previousPosition: [number, number] = [...snakeElem];
              snakeElem[0] = nextPosition[0];
              snakeElem[1] = nextPosition[1];
              updatedGrid[snakeElem[0]][snakeElem[1]] =
                SnakeGridElementState.SNAKE_BODY;
              nextPosition = previousPosition;
            }

            const snakeHead = updatedSnakePositions[0];
            const snakeHeadIsOnSnakeBody = updatedSnakePositions
              .slice(1)
              .some(
                (position) =>
                  position[0] === snakeHead[0] && position[1] === snakeHead[1]
              );
            if (snakeHeadIsOnSnakeBody) {
              setGameState(GameState.ENDED);
            }

            const snakeHeadIsOnFoodPosition =
              updatedGrid[snakeHead[0]][snakeHead[1]] ===
              SnakeGridElementState.FOOD;
            if (!snakeHeadIsOnFoodPosition) {
              updatedGrid[nextPosition[0]][nextPosition[1]] =
                SnakeGridElementState.EMPTY;
            } else {
              updatedSnakePositions.push([nextPosition[0], nextPosition[1]]);
              updatedGrid[nextPosition[0]][nextPosition[1]] =
                SnakeGridElementState.SNAKE_BODY;

              const newFoodPosition = getRandomNotBlockedPosition(
                updatedSnakePositions
              );
              updatedGrid[newFoodPosition[0]][newFoodPosition[1]] =
                SnakeGridElementState.FOOD;
            }
          }

          updatedGrid[updatedSnakePositions[0][0]][
            updatedSnakePositions[0][1]
          ] = SnakeGridElementState.SNAKE_HEAD;
          return updatedSnakePositions;
        });
        return direction;
      });
      return updatedGrid;
    });
  };

  return (
    <div className="w-full h-full bg-[#247c58] text-white flex flex-col items-center justify-center gap-10">
      <div className="relative grid grid-cols-snake grid-rows-snake gap-[1px]">
        {snakeGrid?.map((row, rowIndex) =>
          row.map((elem, colIndex) => {
            let bgColor = "bg-gray-700";
            if (elem === SnakeGridElementState.FOOD) {
              bgColor = "bg-orange-500";
            } else if (elem === SnakeGridElementState.SNAKE_BODY) {
              bgColor = "bg-green-900";
            } else if (elem === SnakeGridElementState.SNAKE_HEAD) {
              bgColor = "bg-green-500";
            }

            return (
              <div key={rowIndex + "/" + colIndex} className={bgColor}></div>
            );
          })
        )}
        <div
          className={
            "absolute w-full h-full flex flex-col justify-center items-center text-xl select-none z-10 bg-black transition-colors " +
            (gameState === GameState.PLAYING ? "bg-opacity-0" : "bg-opacity-70")
          }
        >
          {gameState === GameState.READY && (
            <ControlWithLabel
              kbdElement="Space"
              textLabel="Start playing"
              extraClasses="!gap-3"
            ></ControlWithLabel>
          )}
          {gameState === GameState.PAUSED && <span>paused</span>}
          {gameState === GameState.ENDED && <span>game over</span>}
        </div>
        <div className="absolute top-full left-0 w-full bg-gray-800 p-2 flex flex-row items-center justify-between">
          <ControlWithLabel
            kbdElement="W A S D"
            textLabel="Change direction"
          ></ControlWithLabel>
          <ControlWithLabel
            kbdElement="Space"
            textLabel="Toggle pause"
          ></ControlWithLabel>
          <ControlWithLabel
            kbdElement="Esc"
            textLabel="Stop"
          ></ControlWithLabel>
        </div>
      </div>
    </div>
  );
}

interface ControlWithLabelProps {
  kbdElement: string;
  textLabel: string;
  extraClasses?: string;
}
function ControlWithLabel({
  kbdElement,
  textLabel,
  extraClasses,
}: ControlWithLabelProps) {
  return (
    <div className={"flex flex-row items-center gap-1 " + extraClasses}>
      <kbd className="cursor-default text-sm border rounded-xl bg-white bg-opacity-20 p-1">
        {kbdElement}
      </kbd>
      {textLabel && <span>{textLabel}</span>}
    </div>
  );
}
