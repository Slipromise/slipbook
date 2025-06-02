"use client";

import { ComponentProps, useMemo, useState } from "react";
import styles from "@/styles/components/CompetitionListItem.module.scss";
import Stack from "react-bootstrap/esm/Stack";
import AnchorAvatar from "./AnchorAvatar";
import Image from "react-bootstrap/esm/Image";
import { LuSwords } from "react-icons/lu";
import { BiCollapseVertical } from "react-icons/bi";
import { useMeasure } from "react-use";

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

  const [anchorContainerRef, bounds] = useMeasure<HTMLSpanElement>();

  const collapseAnchorCount = useMemo(
    () => Math.floor(bounds.width / 90),
    [bounds.width]
  );

  const fixedAnchor: Props["anchors"] = useMemo(() => {
    return isCollapsed && anchors && anchors.length > collapseAnchorCount
      ? anchors?.slice(0, collapseAnchorCount)
      : anchors;
  }, [anchors, collapseAnchorCount, isCollapsed]);

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
        <span data-time>
          {new Intl.DateTimeFormat(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          }).format(startTime)}
        </span>
      </Stack>
      <Stack data-body>
        <Stack data-team data-winner={isATeamWinner} data-is-tie={isTie}>
          <Stack direction="horizontal">
            <span data-team-name>{aTeamName}</span>
            {aTeamAvatarSrc ? (
              <Image data-team-logo src={aTeamAvatarSrc} alt="Home Team" />
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
              <Image data-team-logo src={bTeamAvatarSrc} alt="Away Team" />
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
        <Stack
          data-footer
          data-is-collapsed={
            isCollapsed && anchors && anchors.length - fixedAnchor.length > 0
          }
          ref={anchorContainerRef}
        >
          {fixedAnchor.map((itemProps, key) => (
            <AnchorAvatar {...itemProps} key={key} />
          ))}
          {((anchors && anchors.length - fixedAnchor.length > 0) ||
            !isCollapsed) && (
            <div
              className={styles.more}
              onClick={() => setIsCollapsed((b) => !b)}
            >
              {anchors &&
                isCollapsed &&
                anchors.length - fixedAnchor.length > 0 && (
                  <span>{`+${anchors.length - fixedAnchor.length}`}</span>
                )}
              {!isCollapsed && <BiCollapseVertical size="1.5em" />}
            </div>
          )}
        </Stack>
      )}
    </Stack>
  );
}
