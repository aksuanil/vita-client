import { Check } from '@mui/icons-material';
import { Box, Stack, Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper, styled, Typography } from '@mui/material'
import React from 'react';

type Props = {
    connectorGap?: number;
    connectorColorActive?: string;
    connectorColorCompleted?: string;
    steps: string[];
    activeStep: number;
    isStepSkipped: (step: number) => boolean;
    isStepOptional: (step: number) => boolean;
}

export default function Steps({ activeStep, connectorGap = 28, connectorColorActive = '#FFBA26', connectorColorCompleted = '#3F8F36', steps, isStepSkipped, isStepOptional }: Props) {
    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses}`]: {
            top: 10,
            left: `calc(-50% + ${connectorGap}px)`,
            right: `calc(-50% + ${connectorGap}px)`,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: connectorColorActive,
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: connectorColorCompleted,
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 3,
            borderRadius: 1,
        },
    }));

    const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
        ({ theme, ownerState }) => ({
            color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center',
            ...(ownerState.active && {
                color: '#3F8F36',
            }),
            '& .QontoStepIcon-completedIcon': {
                color: '#3F8F36',
                zIndex: 1,
                fontSize: 32,
            },
            '& .QontoStepIcon-circle': {
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: 'currentColor',
            },
        }),
    );

    function QontoStepIcon(props: StepIconProps) {
        const { active, completed, className } = props;

        return (
            <QontoStepIconRoot ownerState={{ active }} className={className}>
                {completed ? (
                    <Check className="QontoStepIcon-completedIcon" />
                ) : (
                    <div className="QontoStepIcon-circle" />
                )}
            </QontoStepIconRoot>
        );
    }
    return (
        <>
            <Stack sx={{ width: '100%' }} spacing={4}>
                <Stepper alternativeLabel connector={<QontoConnector />} activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Stack>
        </>
    )
}