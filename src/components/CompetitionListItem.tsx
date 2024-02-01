import React, { ComponentProps, useMemo, useState } from "react";
import dayjs from "dayjs";
import styles from "../styles/components/CompetitionListItem.module.scss";
import Stack from "react-bootstrap/esm/Stack";
import AnchorAvatar from "./AnchorAvatar";
import Image from "react-bootstrap/esm/Image";
import { LuSwords } from "react-icons/lu";
import { BiCollapseVertical } from "react-icons/bi";

type Props = {
  title: string;
  // 狀態
  status: "STARTED" | "ENDING" | "NONE";
  startTime: number;
  aTeamName: string;
  aTeamAvatarSrc?: string;
  aTeamScore?: number;
  bTeamName: string;
  bTeamAvatarSrc?: string;
  bTeamScore?: number;
  anchors?: ComponentProps<typeof AnchorAvatar>[];
  onClick?: () => void;
  onSubscript?: () => void;
};

// TODO: 彈性調整Props
const COLLAPSE_ANCHOR_COUNT = 5;

export default function CompetitionListItem({
  title,
  status,
  startTime,
  aTeamName,
  bTeamName,
  aTeamScore,
  bTeamScore,
  aTeamAvatarSrc,
  bTeamAvatarSrc,
  anchors,
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(() => true);

  const fixedAnchor: Props["anchors"] = useMemo(() => {
    return isCollapsed && anchors && anchors.length >= COLLAPSE_ANCHOR_COUNT
      ? anchors?.slice(0, COLLAPSE_ANCHOR_COUNT + 1)
      : anchors;
  }, [anchors, isCollapsed]);

  const isATeamWinner = useMemo(() => {
    return (
      status === "ENDING" && aTeamScore && bTeamScore && aTeamScore > bTeamScore
    );
  }, [aTeamScore, bTeamScore, status]);

  const isTie = useMemo(
    () => status === "ENDING" && aTeamScore === bTeamScore,
    [aTeamScore, bTeamScore, status]
  );

  return (
    <Stack
      className={styles.container}
      direction="horizontal"
      data-status={status}
    >
      <Stack data-header>
        <span data-title>{title}</span>
        <span data-time>{dayjs(startTime).format("HH:mm")}</span>
      </Stack>
      <Stack data-body>
        <Stack data-team data-winner={isATeamWinner} data-is-tie={isTie}>
          <Stack direction="horizontal">
            <span data-team-name>{aTeamName}</span>
            {aTeamAvatarSrc ? (
              <Image data-team-logo src={aTeamAvatarSrc} />
            ) : (
              <div data-team-logo>
                <span>{bTeamName[0]}</span>
              </div>
            )}
          </Stack>
          <span data-score>{aTeamScore}</span>
        </Stack>
        <LuSwords size="2em" className={styles["vs-icon"]} />
        <Stack data-team data-winner={!isATeamWinner} data-is-tie={isTie}>
          <Stack direction="horizontal">
            {bTeamAvatarSrc ? (
              <Image data-team-logo src={bTeamAvatarSrc} />
            ) : (
              <div data-team-logo>
                <span>{bTeamName[0]}</span>
              </div>
            )}
            <span data-team-name>{bTeamName}</span>
          </Stack>
          <span data-score>{bTeamScore}</span>
        </Stack>
      </Stack>
      {fixedAnchor && (
        <Stack data-footer data-is-collapsed={isCollapsed}>
          {fixedAnchor.map((itemProps, key) => (
            <AnchorAvatar {...itemProps} key={key} />
          ))}
          {
            <div
              className={styles.more}
              onClick={() => setIsCollapsed((b) => !b)}
            >
              {anchors && isCollapsed && (
                <span>{`+${anchors.length - fixedAnchor.length}`}</span>
              )}
              {!isCollapsed && <BiCollapseVertical size="1.5em" />}
            </div>
          }
        </Stack>
      )}
    </Stack>
  );
}
