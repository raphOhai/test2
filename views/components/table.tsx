import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowUpIcon } from 'lucide-react'
import React from 'react'

interface Model {
    id: number
    rank: number
    rankChange?: 'up' | 'down'
    name: string
    average: number
    arc: number
    hellaswag: number
    mmlu: number
    truthfulqa: number
    winogrande: number
    gsm8k: number
    usage: number
}

export const LeaderboardTable = () => {
    const models: Model[] = [
        {
            id: 1,
            rank: 1,
            name: 'davidkim205/Rhea-72b-v0.5',
            average: 81.22,
            arc: 151.25,
            hellaswag: 91.15,
            mmlu: 77.95,
            truthfulqa: 74.50,
            winogrande: 87.85,
            gsm8k: 76.12,
            usage: 1384193,
        },
        {
            id: 2,
            rank: 2,
            rankChange: 'up',
            name: 'MTSAIR/MultiVerse_70B',
            average: 81.00,
            arc: 151.25,
            hellaswag: 89.77,
            mmlu: 78.22,
            truthfulqa: 75.18,
            winogrande: 87.53,
            gsm8k: 76.65,
            usage: 1319156,
        },
        {
            id: 3,
            rank: 3,
            name: 'Model 3',
            average: 80.50,
            arc: 150.00,
            hellaswag: 88.50,
            mmlu: 77.00,
            truthfulqa: 73.00,
            winogrande: 86.00,
            gsm8k: 75.00,
            usage: 1200000,
        },
        {
            id: 4,
            rank: 4,
            name: 'Model 4',
            average: 79.75,
            arc: 149.00,
            hellaswag: 87.25,
            mmlu: 76.50,
            truthfulqa: 72.50,
            winogrande: 85.25,
            gsm8k: 74.25,
            usage: 1100000,
        },
        {
            id: 5,
            rank: 5,
            rankChange: 'down',
            name: 'ibivibiv/alpaca-dragon-72b-v1',
            average: 79.00,
            arc: 148.00,
            hellaswag: 86.50,
            mmlu: 76.00,
            truthfulqa: 72.00,
            winogrande: 84.50,
            gsm8k: 73.50,
            usage: 1000000,
        },
        {
            id: 6,
            rank: 6,
            name: 'Model 6',
            average: 78.25,
            arc: 147.00,
            hellaswag: 85.75,
            mmlu: 75.50,
            truthfulqa: 71.50,
            winogrande: 83.75,
            gsm8k: 72.75,
            usage: 900000,
        },
        {
            id: 7,
            rank: 7,
            name: 'Model 7',
            average: 77.50,
            arc: 146.00,
            hellaswag: 85.00,
            mmlu: 75.00,
            truthfulqa: 71.00,
            winogrande: 83.00,
            gsm8k: 72.00,
            usage: 800000,
        },
        {
            id: 8,
            rank: 8,
            name: 'Model 8',
            average: 76.75,
            arc: 145.00,
            hellaswag: 84.25,
            mmlu: 74.50,
            truthfulqa: 70.50,
            winogrande: 82.25,
            gsm8k: 71.25,
            usage: 700000,
        },
    ]

    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US')
    }

    const formatScore = (score: number) => {
        return score.toFixed(2)
    }

    return (
        <div className='inline-block min-w-full align-middle px-4 md:px-0'>
            <Table className='text-base'>
                <TableHeader className='bg-transparent border-none'>
                    <TableRow className='border-none hover:!bg-transparent'>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0]   '></TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>#.Model Name</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>Average</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>ARC</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>HellaSwag</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>MMLU</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>TruthfulQA</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>Winogrande</TableHead>
                        <TableHead className='text-[10px] md:text-[10px] whitespace-nowrap text-[#8F99B0] '>GSM8K</TableHead>
                        <TableHead className='text-[10px] md:text-[16px] whitespace-nowrap text-[#8F99B0] '>Usage</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {models.map((model, index) => (
                        <TableRow
                            key={model.id}
                            className={index % 2 === 0 ? 'bg-[#C9D9FF14] border-none hover:!bg-[#C9D9FF14]' : 'bg-transparent border-none hover:!bg-transparent'}
                        >
                            <TableCell className="font-medium !text-[16px] whitespace-nowrap text-white py-4">
                                <div className='flex items-center gap-1'>

                                    {model.rankChange === 'up' && (
                                        <span className='text-green-500'>↑</span>
                                    )}
                                    {model.rankChange === 'down' && (
                                        <span className='text-red-500'>↓</span>
                                    )}
                                    {model.rankChange === undefined && (
                                        <span className='text-gray-500'>-</span>
                                    )}


                                </div>
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap font-medium text-white py-4'>
                                {model.rank} {".   "}
                                {model.name}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.average)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.arc)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.hellaswag)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.mmlu)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.truthfulqa)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.winogrande)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatScore(model.gsm8k)}
                            </TableCell>
                            <TableCell className='!text-[10px] whitespace-nowrap text-white py-4'>
                                {formatNumber(model.usage)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex  justify-end items-center">
                <Button variant='link' className='rounded-[95px] ' >
                    View full leaderboard
                </Button>

                <div className='flex rounded-full border border-white p-2'>
                    <ArrowUpIcon
                        className='w-4 h-4 text-white'
                    />

                </div>



            </div>
        </div>
    )
}

