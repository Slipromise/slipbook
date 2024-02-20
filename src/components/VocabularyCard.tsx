import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { isString, isArray } from "lodash";
import styles from "../styles/components/VocabularyCard.module.scss";
import { AiFillSound } from "react-icons/ai";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
type Sentence = { content: string; translation: string } | string;

type Props = {
  name: string;
  ipa: string | string[];
  origin: string | string[];
  partOfSpeech: string | string[];
  definition: string | string[];
  sentences: Sentence | Sentence[];
  onVoice?: () => void;
};

function VocabularyCard({
  name,
  ipa,
  origin,
  partOfSpeech,
  definition,
  sentences,
  onVoice,
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(() => false);

  return (
    <Card className={styles.container}>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>
          {`${isString(partOfSpeech) ? partOfSpeech : partOfSpeech.join(";")} ${
            isString(ipa) ? ipa : ipa.join("")
          }`}
          {onVoice && <AiFillSound size="2em" onClick={onVoice} />}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Stack>
          {typeof origin === "string" ? (
            <span>{origin}</span>
          ) : (
            origin.map((item) => <span key={item}>{item}</span>)
          )}
        </Stack>
        <Stack>
          {typeof definition === "string" ? (
            <span>{definition}</span>
          ) : (
            definition.map((d) => <span key={d}>{d}</span>)
          )}
        </Stack>
      </Card.Body>
      <Card.Footer>
        {!isCollapsed && (
          <Stack as="ul">
            {isArray(sentences) ? (
              sentences.map((item) =>
                isString(item) ? (
                  <li key={item}>{item}</li>
                ) : (
                  <li key={item.content}>
                    {item.content}
                    <br />
                    {item.translation}
                  </li>
                )
              )
            ) : isString(sentences) ? (
              <li key={sentences}>{sentences}</li>
            ) : (
              <li key={sentences.content}>
                {sentences.content}
                <br />
                {sentences.translation}
              </li>
            )}
          </Stack>
        )}
        {isCollapsed ? (
          <BsChevronDoubleDown
            onClick={() => setIsCollapsed((b) => !b)}
            className={styles["collapsed-icon"]}
          />
        ) : (
          <BsChevronDoubleUp
            onClick={() => setIsCollapsed((b) => !b)}
            className={styles["collapsed-icon"]}
          />
        )}
      </Card.Footer>
    </Card>
  );
}

export default VocabularyCard;
